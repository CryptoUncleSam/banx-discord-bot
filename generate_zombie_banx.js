
import { createCanvas, loadImage } from "canvas";

export async function generateZombie(metadata){
    const canvas = createCanvas(2048, 2048);
    const ctx = canvas.getContext("2d");

    const background = await loadImage(
        `./layers/Background/${metadata["Background"].toLowerCase()}.png`
    );
    ctx.drawImage(background, 0, 0, 2048, 2048);
    const fur = await loadImage(
      `./layers/Fur/zombie.png`
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

    return canvas.toBuffer("image/png");
}