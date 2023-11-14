import React from "react";
import { Box, Button, Text, useTheme } from "../../Components";
import { ScrollView } from "react-native";
import Card, { cardType } from "./Card";
import AddCard from "./AddCard";
import { CARD_HEIGHT } from "./CardLayout";
import LineItems from "./LineItems";

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
        <Box height={CARD_HEIGHT}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
        <Box marginTop="m" alignItems={"flex-start"}>
          <Text color="background" variant={"title3"} marginBottom={"m"}>
            Delivery Address
          </Text>
          <Box flexDirection={"row"} opacity={0.5}>
            <Box flex={1} paddingVertical={"m"} alignItems={"flex-start"}>
              <Text color="background">
                Unit 15, York Farm Business Centre,
              </Text>
              <Text color="background">Watling St, Towcester</Text>
            </Box>
            <Box
              padding={"m"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text color="background">Change</Text>
            </Box>
          </Box>
        </Box>
        <LineItems label="Total Items (5)" value={335.22} />
        <LineItems label="Standard Delivery" value={222.22} />
        <LineItems label="Total Payment " value={557.44} />
        <Box
          paddingVertical={"l"}
          alignItems={"center"}
          flex={1}
          justifyContent={"center"}
        >
          <Button
            label="Swipe to Pay $557.44"
            variant="primary"
            onPress={() => null}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Checkout;
