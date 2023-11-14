import { Image, Pressable } from "react-native";
import React from "react";
import { Box, Text } from "../../Components";
import { CardLayout } from "./CardLayout";

export enum cardType {
  VISA,
  MASTERCARD,
}

export interface CardModel {
  id: number;
  type: cardType;
  last4Digits: number;
  expiration: string;
}

interface CardProps {
  card: CardModel;
  selected: boolean;
  onSelected: () => void;
}

const visaLogo = require("../../../assets/visa.png");
const mastercardLogo = require("../../../assets/mastercard.png");

const Card = ({ card, selected, onSelected }: CardProps) => {
  return (
    <CardLayout
      backgroundColor={selected ? "primary" : "background"}
      onPress={onSelected}
    >
      {/* Card Logo */}
      <Box marginLeft={"s"} marginTop={"m"}>
        <Image
          style={
            card.type === cardType.VISA
              ? { width: 39, height: 16 }
              : {
                  width: 32.5,
                  height: 20,
                }
          }
          source={card.type === cardType.VISA ? visaLogo : mastercardLogo}
        />
      </Box>
      {/* Card Number */}
      <Text
        variant="title3"
        marginTop="m"
        marginBottom={"s"}
        color={selected ? "background" : "text"}
      >
        {`**** ${card.last4Digits}`}
      </Text>
      {/* Expiration */}
      <Box alignItems={"flex-start"}>
        <Text opacity={0.5} color={"secondary"}>{`Expiration`}</Text>
        <Text color={selected ? "background" : "text"}>
          {`${card.expiration}`}
        </Text>
      </Box>
    </CardLayout>
  );
};

export default Card;
