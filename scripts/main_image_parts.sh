#!/bin/bash

SCREENSHOT_PATH=./scripts/main_image.png
OUTPUT_DIR=./scripts/


FACTOR=2
HEADER_HEIGHT=$((64 * FACTOR))
HEADER_WIDTH=$((1600 * FACTOR))

HEADER_PADDING=$((24 * FACTOR))

SMALL_CARD_X=$(((261 + 16) * FACTOR))
SMALL_CARD_Y=$((HEADER_HEIGHT + HEADER_PADDING))
SMALL_CARD_WIDTH=$((244 * FACTOR))
SMALL_CARD_HEIGHT=$((170 * FACTOR))
SMALL_CARD_PADDING=$((24 * FACTOR))
SMALL_CARD_OFFSET=$((SMALL_CARD_WIDTH + SMALL_CARD_PADDING))

BIG_CARD_X=$SMALL_CARD_X
BIG_CARD_Y=$((SMALL_CARD_Y + HEADER_PADDING + SMALL_CARD_HEIGHT))
BIG_CARD_WIDTH=$((511 * FACTOR))
BIG_CARD_1_HEIGHT=$((537 * FACTOR))
BIG_CARD_2_HEIGHT=$((416 * FACTOR))
BIG_CARD_OFFSET=$((BIG_CARD_WIDTH + SMALL_CARD_PADDING))

FOOTER_Y=1670

PARTS=(
  "header,0,0,${HEADER_WIDTH},${HEADER_HEIGHT}"
  "card1,${SMALL_CARD_X},${SMALL_CARD_Y},${SMALL_CARD_WIDTH},${SMALL_CARD_HEIGHT}"
  "card2,$((SMALL_CARD_X + SMALL_CARD_OFFSET)),${SMALL_CARD_Y},$((SMALL_CARD_WIDTH - 2)),${SMALL_CARD_HEIGHT}"
  "card3,$((SMALL_CARD_X + (SMALL_CARD_OFFSET * 2) - 2)),${SMALL_CARD_Y},$((SMALL_CARD_WIDTH - 2)),${SMALL_CARD_HEIGHT}"
  "card4,$((SMALL_CARD_X + (SMALL_CARD_OFFSET * 3) - 4)),${SMALL_CARD_Y},$((SMALL_CARD_WIDTH)),${SMALL_CARD_HEIGHT}"
  "card5,${BIG_CARD_X},${BIG_CARD_Y},${BIG_CARD_WIDTH},${BIG_CARD_1_HEIGHT}"
  "card6,$((BIG_CARD_X + BIG_CARD_OFFSET)),${BIG_CARD_Y},${BIG_CARD_WIDTH},${BIG_CARD_2_HEIGHT}"
  "footer,0,${FOOTER_Y},${HEADER_WIDTH},$(((1600 * FACTOR) - FOOTER_Y))"
)

for i in "${!PARTS[@]}"; do
    IFS=',' read -r FILENAME X Y WIDTH HEIGHT <<< "${PARTS[i]}"
    magick "$SCREENSHOT_PATH" -crop "${WIDTH}x${HEIGHT}+${X}+${Y}" "$OUTPUT_DIR/$FILENAME.png"
done
