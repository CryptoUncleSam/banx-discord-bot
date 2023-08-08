
import { createCanvas, loadImage } from "canvas";

export async function generateBannerX(metadata, color){
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

    return canvas.toBuffer("image/png");
}