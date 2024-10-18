export type GiftType = {
    position: [number, number];
    title: string;
    availabilityDate: string;
    isReceived: boolean;
    content: {
      img: string;
      text: string;
    };
  };