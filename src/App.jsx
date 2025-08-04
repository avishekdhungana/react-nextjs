import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const phones = [
  {
    name: "iPhone 15 Pro",
    features: [
      "6.1-inch OLED display",
      "A17 Pro chip",
      "Triple camera system",
      "USB-C port",
      "Titanium body",
    ],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
         image: "https://unsplash.com/photos/an-iphone-is-sitting-on-top-of-a-box-LunVPm34ly4",

    features: [
      "6.8-inch AMOLED display",
      "Snapdragon 8 Gen 3",
      "200MP camera",
      "S Pen support",
      "5000mAh battery",

    ],
  },
  {
    name: "Google Pixel 8 Pro",
    features: [
      "6.7-inch OLED display",
      "Tensor G3 chip",
      "Pro camera tools",
      "7 years of updates",
      "Face Unlock + Fingerprint",
    ],
  },
  {
    name: "OnePlus 12",
    features: [
      "Snapdragon 8 Gen 3",
      "5400mAh battery",
      "120Hz AMOLED",
      "50W wireless charging",
      "Hasselblad camera tuning",
    ],
  },
  {
    name: "Nothing Phone 2",
    features: [
      "Glyph Interface",
      "Snapdragon 8+ Gen 1",
      "Transparent design",
      "120Hz OLED",
      "4500mAh battery",
    ],
  },
  {
    name: "Xiaomi 14 Pro",
    features: [
      "Leica camera",
      "Snapdragon 8 Gen 3",
      "120W fast charging",
      "2K AMOLED display",
      "Android 14 (HyperOS)",
    ],
  },
  {
    name: "Motorola Edge 50 Ultra",
    features: [
      "Snapdragon 8s Gen 3",
      "1.5K pOLED display",
      "144Hz refresh rate",
      "Fast charging + wireless",
      "Wood/leather finish options",
    ],
  },
  {
    name: "Asus ROG Phone 8",
    features: [
      "Gaming-focused design",
      "Snapdragon 8 Gen 3",
      "165Hz AMOLED",
      "AirTriggers",
      "6000mAh battery",
    ],
  },
  {
    name: "Sony Xperia 1 V",
    features: [
      "4K OLED display",
      "Pro camera tools",
      "3.5mm headphone jack",
      "Cinematic mode",
      "Sleek Sony design",
    ],
  },
  {
    name: "Realme GT 6",
    features: [
      "Snapdragon 8s Gen 3",
      "Rainwater touch support",
      "120Hz AMOLED",
      "100W charging",
      "Brightest screen (up to 6000 nits)",
    ],
  },
  {
    name: "iPhone SE (2024)",
    features: [
      "4.7-inch Retina display",
      "A16 Bionic chip",
      "Touch ID",
      "Affordable pricing",
      "Compact size",
    ],
  },
  {
    name: "Samsung Galaxy Z Fold 5",
    features: [
      "Foldable AMOLED display",
      "Snapdragon 8 Gen 2",
      "Multitasking support",
      "IPX8 water resistance",
      "Stylus compatibility",
    ],
  },
  {
    name: "Samsung Galaxy Z Flip 5",
    features: [
      "Compact clamshell design",
      "3.4-inch cover screen",
      "FlexCam mode",
      "Fast charging",
      "Premium hinge",
    ],
  },
  {
    name: "Vivo X100 Pro",
    features: [
      "Zeiss optics",
      "1-inch main sensor",
      "Flagship performance",
      "Long battery life",
      "Curved AMOLED",
    ],
  },
  {
    name: "iQOO 12",
    features: [
      "Gaming-grade Snapdragon 8 Gen 3",
      "144Hz AMOLED",
      "Vapor chamber cooling",
      "120W fast charging",
      "Flagship value",
    ],
  },
  {
    name: "Honor Magic6 Pro",
    features: [
      "Eye-tracking control",
      "Periscope telephoto",
      "Snapdragon 8 Gen 3",
      "Quad-curved display",
      "High-end design",
    ],
  },
  {
    name: "Tecno Phantom V Flip",
    features: [
      "Affordable flip phone",
      "Round outer display",
      "64MP main camera",
      "Fast charging",
      "Stylish look",
    ],
  },
  {
    name: "Infinix Zero Ultra",
    features: [
      "180W fast charging",
      "120Hz curved AMOLED",
      "Flagship camera",
      "Dimensity 920 chipset",
      "Stylish glass design",
    ],
  },
  {
    name: "Lava Agni 2",
    features: [
      "Made in India",
      "Curved AMOLED",
      "Dimensity 7050",
      "66W charging",
      "Affordable price",
    ],
  },
  {
    name: "Poco F5 Pro",
    features: [
      "WQHD+ display",
      "Snapdragon 8+ Gen 1",
      "67W turbo charging",
      "OIS camera",
      "Big battery",
    ],
  },
];


const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const show = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        📱 Mobile Phone List
      </Typography>

      {phones.map((phone, index) => (
        <Card
          key={index}
          onClick={() => show(index)}
          sx={{
            marginBottom: 2,
            cursor: "pointer",
            backgroundColor: "#f9f9f9",
            "&:hover": { backgroundColor: "#f1f1f1" },
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              {phone.name}
            </Typography>
            {index === activeIndex && (
              <Box mt={1}>
                <Typography variant="body1">
                  {phone.features.join(", ")}
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default App;
