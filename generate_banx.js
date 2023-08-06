import { createCanvas, loadImage } from "canvas";
import { getBanxMetadata } from "./hyperspace.js";

// Generate banx from layers given banx number and image type
export async function generateBanx(banxNumber, imageType, color) {
  // Get metadata from hyperspace
  const metadata = await getBanxMetadata(banxNumber);

  let buffer;

  // If color default get color from metadata
  if(color=='default'){
    color = metadata["Background"]
  }

  // Generate image without background
  if (imageType === "no_background") {
    const canvas = createCanvas(2048, 2048);
    const ctx = canvas.getContext("2d");

    const fur = await loadImage(
      `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
    );
    ctx.drawImage(fur, 0, 0, 2048, 2048);
    const body = await loadImage(
      `./layers/Body/${metadata["Body"].toLowerCase()}.png`
    );
    ctx.drawImage(body, 0, 0, 2048, 2048);
    const head = await loadImage(
      `./layers/Head/${metadata["Head"].toLowerCase()}.png`
    );
    ctx.drawImage(head, 0, 0, 2048, 2048);
    const eyes = await loadImage(
      `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
    );
    ctx.drawImage(eyes, 0, 0, 2048, 2048);
    const mouth = await loadImage(
      `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
    );
    ctx.drawImage(mouth, 0, 0, 2048, 2048);

    buffer = canvas.toBuffer("image/png");
  }

  // Generate wallpaper
  if (imageType === "phone_wallpaper_logo") {
    const canvas = createCanvas(2048, 4432);
    const ctx = canvas.getContext("2d");

    const wallpaper = await loadImage(
      `./layers/Wallpaper/${color.toLowerCase()}.png`
    );
    ctx.drawImage(wallpaper, 0, 0, 2048, 4432);
    const fur = await loadImage(
      `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
    );
    ctx.drawImage(fur, 0, 2383, 2048, 2048);
    const body = await loadImage(
      `./layers/Body/${metadata["Body"].toLowerCase()}.png`
    );
    ctx.drawImage(body, 0, 2383, 2048, 2048);
    const head = await loadImage(
      `./layers/Head/${metadata["Head"].toLowerCase()}.png`
    );
    ctx.drawImage(head, 0, 2383, 2048, 2048);
    const eyes = await loadImage(
      `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
    );
    ctx.drawImage(eyes, 0, 2383, 2048, 2048);
    const mouth = await loadImage(
      `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
    );
    ctx.drawImage(mouth, 0, 2383, 2048, 2048);

    buffer = canvas.toBuffer("image/png");
  }

  if (imageType === "phone_wallpaper_no_logo") {
    const canvas = createCanvas(2048, 4432);
    const ctx = canvas.getContext("2d");

    const wallpaper = await loadImage(
      `./layers/Wallpaper/nologo/${color.toLowerCase()}.png`
    );
    ctx.drawImage(wallpaper, 0, 0, 2048, 4432);
    const fur = await loadImage(
      `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
    );
    ctx.drawImage(fur, 0, 2383, 2048, 2048);
    const body = await loadImage(
      `./layers/Body/${metadata["Body"].toLowerCase()}.png`
    );
    ctx.drawImage(body, 0, 2383, 2048, 2048);
    const head = await loadImage(
      `./layers/Head/${metadata["Head"].toLowerCase()}.png`
    );
    ctx.drawImage(head, 0, 2383, 2048, 2048);
    const eyes = await loadImage(
      `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
    );
    ctx.drawImage(eyes, 0, 2383, 2048, 2048);
    const mouth = await loadImage(
      `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
    );
    ctx.drawImage(mouth, 0, 2383, 2048, 2048);

    buffer = canvas.toBuffer("image/png");
  }

  // Generate twitter/ X banner
  if (imageType === "x_banner_logo") {
    const canvas = createCanvas(1500, 500);
    const ctx = canvas.getContext("2d");

    const wallpaper = await loadImage(
      `./layers/TwitterBanner/${color.toLowerCase()}.png`
    );
    ctx.drawImage(wallpaper, 0, 0, 1500, 500);
    const fur = await loadImage(
      `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
    );
    ctx.drawImage(fur, 1000, 0, 500, 500);
    const body = await loadImage(
      `./layers/Body/${metadata["Body"].toLowerCase()}.png`
    );
    ctx.drawImage(body, 1000, 0, 500, 500);
    const head = await loadImage(
      `./layers/Head/${metadata["Head"].toLowerCase()}.png`
    );
    ctx.drawImage(head, 1000, 0, 500, 500);
    const eyes = await loadImage(
      `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
    );
    ctx.drawImage(eyes, 1000, 0, 500, 500);
    const mouth = await loadImage(
      `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
    );
    ctx.drawImage(mouth, 1000, 0, 500, 500);

    buffer = canvas.toBuffer("image/png");
  }

  // Generate twitter/ X banner
  if (imageType === "x_banner_no_logo") {
    const canvas = createCanvas(1500, 500);
    const ctx = canvas.getContext("2d");

    const wallpaper = await loadImage(
      `./layers/TwitterBanner/nologo/${color.toLowerCase()}.png`
    );
    ctx.drawImage(wallpaper, 0, 0, 1500, 500);
    const fur = await loadImage(
      `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
    );
    ctx.drawImage(fur, 1000, 0, 500, 500);
    const body = await loadImage(
      `./layers/Body/${metadata["Body"].toLowerCase()}.png`
    );
    ctx.drawImage(body, 1000, 0, 500, 500);
    const head = await loadImage(
      `./layers/Head/${metadata["Head"].toLowerCase()}.png`
    );
    ctx.drawImage(head, 1000, 0, 500, 500);
    const eyes = await loadImage(
      `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
    );
    ctx.drawImage(eyes, 1000, 0, 500, 500);
    const mouth = await loadImage(
      `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
    );
    ctx.drawImage(mouth, 1000, 0, 500, 500);

    buffer = canvas.toBuffer("image/png");
  }

  return buffer;
}

