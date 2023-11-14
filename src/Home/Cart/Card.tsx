import { Image, Pressable } from "react-native";
import React from "react";
import { Box } from "../../Components";
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
      {/* Image */}
      <Box marginLeft={"m"} marginTop={"m"}>
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
    </CardLayout>
  );
};

export default Card;
