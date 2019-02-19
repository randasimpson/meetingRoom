-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-02-19 01:55:48.777

-- tables
-- Table: Features
CREATE TABLE Features (
    projector_id boolean  NOT NULL,
    desk_id boolean  NOT NULL,
    table_id boolean  NOT NULL,
    computer_id boolean  NOT NULL,
    seat_id real  NOT NULL,
    CONSTRAINT Features_pk PRIMARY KEY (seat_id)
);

-- Table: Rooms
CREATE TABLE Rooms (
    room_id decimal(5,2)  NOT NULL,
    floor_id real  NOT NULL,
    building_building_name boolean  NOT NULL,
    CONSTRAINT Rooms_pk PRIMARY KEY (room_id,floor_id)
);

-- Table: building
CREATE TABLE building (
    building_name boolean  NOT NULL,
    campus_acc_campus boolean  NOT NULL,
    CONSTRAINT building_pk PRIMARY KEY (building_name)
);

-- Table: campus
CREATE TABLE campus (
    acc_campus boolean  NOT NULL,
    CONSTRAINT campus_pk PRIMARY KEY (acc_campus)
);

-- Table: room_features
CREATE TABLE room_features (
    Rooms_room_id decimal(5,2)  NOT NULL,
    Features_seat_id real  NOT NULL,
    Rooms_floor_id real  NOT NULL,
    CONSTRAINT room_features_pk PRIMARY KEY (Rooms_room_id,Features_seat_id,Rooms_floor_id)
);

-- foreign keys
-- Reference: Rooms_building (table: Rooms)
ALTER TABLE Rooms ADD CONSTRAINT Rooms_building
    FOREIGN KEY (building_building_name)
    REFERENCES building (building_name)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: building_campus (table: building)
ALTER TABLE building ADD CONSTRAINT building_campus
    FOREIGN KEY (campus_acc_campus)
    REFERENCES campus (acc_campus)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: room_features_Features (table: Features)
ALTER TABLE Features ADD CONSTRAINT room_features_Features
    FOREIGN KEY (seat_id)
    REFERENCES room_features (Features_seat_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: room_features_Rooms (table: Rooms)
ALTER TABLE Rooms ADD CONSTRAINT room_features_Rooms
    FOREIGN KEY (room_id)
    REFERENCES room_features (Rooms_room_id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

