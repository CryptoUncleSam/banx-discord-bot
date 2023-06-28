import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import { getBanxMetadata } from "./hyperspace.js";


// Generate banx from layers given banx number and image type
export async function generateBanx(banxNumber, imageType) {
    // Get metadata from hyperspace
    const metadata = await getBanxMetadata(banxNumber);
    // Generate image without background
    if(imageType === "nobg"){

        const canvas = createCanvas(2048, 2048);
        const ctx = canvas.getContext("2d");

        const fur = await loadImage(`./layers/Fur/${metadata['Fur'].toLowerCase()}.png`)
        ctx.drawImage(fur, 0, 0, 2048, 2048);
        const body = await loadImage(`./layers/Body/${metadata['Body'].toLowerCase()}.png`)
        ctx.drawImage(body, 0, 0, 2048, 2048);
        const head = await loadImage(`./layers/Head/${metadata['Head'].toLowerCase()}.png`)
        ctx.drawImage(head, 0, 0, 2048, 2048);
        const eyes = await loadImage(`./layers/Eyes/${metadata['Eyes'].toLowerCase()}.png`)
        ctx.drawImage(eyes, 0, 0, 2048, 2048);
        const mouth = await loadImage(`./layers/Mouth/${metadata['Mouth'].toLowerCase()}.png`)
        ctx.drawImage(mouth, 0, 0, 2048, 2048);

        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(`./generated_images/banx_${banxNumber}_${imageType}.png`, buffer);
        
    }

    // Generate wallpaper
    if(imageType === "wallpaper"){

        const canvas = createCanvas(2048, 4432);
        const ctx = canvas.getContext("2d");

        const wallpaper = await loadImage(`./layers/Wallpaper/${metadata['Background'].toLowerCase()}.png`)
        ctx.drawImage(wallpaper, 0, 0, 2048, 4432);
        const fur = await loadImage(`./layers/Fur/${metadata['Fur'].toLowerCase()}.png`)
        ctx.drawImage(fur, 0, 2383, 2048, 2048);
        const body = await loadImage(`./layers/Body/${metadata['Body'].toLowerCase()}.png`)
        ctx.drawImage(body, 0, 2383, 2048, 2048);
        const head = await loadImage(`./layers/Head/${metadata['Head'].toLowerCase()}.png`)
        ctx.drawImage(head, 0, 2383, 2048, 2048);
        const eyes = await loadImage(`./layers/Eyes/${metadata['Eyes'].toLowerCase()}.png`)
        ctx.drawImage(eyes, 0, 2383, 2048, 2048);
        const mouth = await loadImage(`./layers/Mouth/${metadata['Mouth'].toLowerCase()}.png`)
        ctx.drawImage(mouth, 0, 2383, 2048, 2048);

        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(`./generated_images/banx_${banxNumber}_${imageType}.png`, buffer);
    }

    // Generate twitter banner
    if(imageType === "banner"){

        const canvas = createCanvas(1500, 500);
        const ctx = canvas.getContext("2d");

        const wallpaper = await loadImage(`./layers/TwitterBanner/${metadata['Background'].toLowerCase()}.png`)
        ctx.drawImage(wallpaper, 0, 0, 1500, 500);
        const fur = await loadImage(`./layers/Fur/${metadata['Fur'].toLowerCase()}.png`)
        ctx.drawImage(fur, 1000, 0, 500, 500);
        const body = await loadImage(`./layers/Body/${metadata['Body'].toLowerCase()}.png`)
        ctx.drawImage(body, 1000, 0, 500, 500);
        const head = await loadImage(`./layers/Head/${metadata['Head'].toLowerCase()}.png`)
        ctx.drawImage(head, 1000, 0, 500, 500);
        const eyes = await loadImage(`./layers/Eyes/${metadata['Eyes'].toLowerCase()}.png`)
        ctx.drawImage(eyes, 1000, 0, 500, 500);
        const mouth = await loadImage(`./layers/Mouth/${metadata['Mouth'].toLowerCase()}.png`)
        ctx.drawImage(mouth, 1000, 0, 500, 500);

        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(`./generated_images/banx_${banxNumber}_${imageType}.png`, buffer);
    }

    return `./generated_images/banx_${banxNumber}_${imageType}.png`
    
}

export function deleteImage(imagePath){
    // Delete image after 1 minute
    setTimeout(() => {
        fs.unlinkSync(imagePath)
    }, 60000);
}
