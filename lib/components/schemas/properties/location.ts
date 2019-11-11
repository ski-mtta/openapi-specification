export const description = "MTTA defined locations (e.g. High Hut)";

export enum Locations {
    HighHut = "High Hut",
    CopperCreek = "Copper Creek",
    Yurt = "The Yurt",
    SnowBowl = "Snow Bowl",
    AlpinaShed = "Alpina Shed",
    FireHall = "Fire Hall",
    Office = "The MTTA Office",
    Whittakers = "Whittakers",
}

export default {
    type: "string",
    enum: Object.values(Locations),
    example: Locations.HighHut,
    description
};
