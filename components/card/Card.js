import React, { Component } from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

const Card = () => {
    
    return (
        <Card
            title={null}
            image={{ uri: "http://via.placeholder.com/160x160" }}
            containerStyle={{ padding: 0, width: 160 }}
        >
        </Card>
    );
}