import React from "react";
import { Box, Text, useTheme } from "../../Components";
import { ScrollView } from "react-native";
import Card, { cardType } from "./Card";
import AddCard from "./AddCard";

interface CheckoutProps {
  minHeight: number;
}

const cards = [
  { id: 0, type: cardType.VISA, last4Digits: 4205, expiration: "05/22" },
  {
    id: 1,
    type: cardType.MASTERCARD,
    last4Digits: 4205,
    expiration: "04/22",
  },
];

const Checkout = ({ minHeight }: CheckoutProps) => {
  const [selectedCard, setSelectedCard] = React.useState(cards[0]?.id);
  return (
    <Box
      flex={1}
      backgroundColor={"secondary"}
      style={{
        paddingTop: minHeight,
      }}
    >
      <Box flex={1} padding={"m"}>
        <ScrollView horizontal>
          <AddCard />
          {cards.map((card) => {
            return (
              <Card
                key={card?.id}
                card={card}
                selected={selectedCard === card?.id}
                onSelected={() => setSelectedCard(card?.id)}
              />
            );
          })}
        </ScrollView>
      </Box>
    </Box>
  );
};
export default Checkout;
