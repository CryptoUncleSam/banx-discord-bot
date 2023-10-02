
import { createCanvas, loadImage } from "canvas";
import { getBanxMetadata } from "./hyperspace.js";

export async function generateMultiplesBanxs(banxNumbers, color, imageType){

    const canvas = createCanvas(1500, 500);
    const ctx = canvas.getContext("2d");

    let path

    if (imageType === "x_banner_logo"){
        path = './layers/TwitterBanner/'
    }else if (imageType === "x_banner_no_logo"){
        path = './layers/TwitterBanner/nologo/'
    }
    const wallpaper = await loadImage(
        `${path}${color.toLowerCase()}.png`
      );
    ctx.drawImage(wallpaper, 0, 0, 1500, 500);

    for(const banxNumber of banxNumbers){
        if(banxNumber.number!=null){
            const metadata = await getBanxMetadata(banxNumber.number);
            if(banxNumber.place=='middle'){
                const fur = await loadImage(
                    `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
                );
                ctx.drawImage(fur, 625, 250, 250, 250);
                const body = await loadImage(
                    `./layers/Body/${metadata["Body"].toLowerCase()}.png`
                );
                ctx.drawImage(body, 625, 250, 250, 250);
                const head = await loadImage(
                    `./layers/Head/${metadata["Head"].toLowerCase()}.png`
                );
                ctx.drawImage(head, 625, 250, 250, 250);
                const eyes = await loadImage(
                    `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
                );
                ctx.drawImage(eyes, 625, 250, 250, 250);
                const mouth = await loadImage(
                    `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
                );
                ctx.drawImage(mouth, 625, 250, 250, 250);
            }
            if(banxNumber.place=='middleRight'){
                const fur = await loadImage(
                    `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
                );
                ctx.drawImage(fur, 815, 250, 250, 250);
                const body = await loadImage(
                    `./layers/Body/${metadata["Body"].toLowerCase()}.png`
                );
                ctx.drawImage(body, 815, 250, 250, 250);
                const head = await loadImage(
                    `./layers/Head/${metadata["Head"].toLowerCase()}.png`
                );
                ctx.drawImage(head, 815, 250, 250, 250);
                const eyes = await loadImage(
                    `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
                );
                ctx.drawImage(eyes, 815, 250, 250, 250);
                const mouth = await loadImage(
                    `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
                );
                ctx.drawImage(mouth, 815, 250, 250, 250);
            }
            if(banxNumber.place=='right'){
                const fur = await loadImage(
                    `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
                );
                ctx.drawImage(fur, 1015, 250, 250, 250);
                const body = await loadImage(
                    `./layers/Body/${metadata["Body"].toLowerCase()}.png`
                );
                ctx.drawImage(body, 1015, 250, 250, 250);
                const head = await loadImage(
                    `./layers/Head/${metadata["Head"].toLowerCase()}.png`
                );
                ctx.drawImage(head, 1015, 250, 250, 250);
                const eyes = await loadImage(
                    `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
                );
                ctx.drawImage(eyes, 1015, 250, 250, 250);
                const mouth = await loadImage(
                    `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
                );
                ctx.drawImage(mouth, 1015, 250, 250, 250);
            }
            if(banxNumber.place=='middleLeft'){
                const fur = await loadImage(
                    `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
                );
                ctx.drawImage(fur, 435, 250, 250, 250);
                const body = await loadImage(
                    `./layers/Body/${metadata["Body"].toLowerCase()}.png`
                );
                ctx.drawImage(body, 435, 250, 250, 250);
                const head = await loadImage(
                    `./layers/Head/${metadata["Head"].toLowerCase()}.png`
                );
                ctx.drawImage(head, 435, 250, 250, 250);
                const eyes = await loadImage(
                    `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
                );
                ctx.drawImage(eyes, 435, 250, 250, 250);
                const mouth = await loadImage(
                    `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
                );
                ctx.drawImage(mouth, 435, 250, 250, 250);
            }
            if(banxNumber.place=='left'){
                const fur = await loadImage(
                    `./layers/Fur/${metadata["Fur"].toLowerCase()}.png`
                );
                ctx.drawImage(fur, 235, 250, 250, 250);
                const body = await loadImage(
                    `./layers/Body/${metadata["Body"].toLowerCase()}.png`
                );
                ctx.drawImage(body, 235, 250, 250, 250);
                const head = await loadImage(
                    `./layers/Head/${metadata["Head"].toLowerCase()}.png`
                );
                ctx.drawImage(head, 235, 250, 250, 250);
                const eyes = await loadImage(
                    `./layers/Eyes/${metadata["Eyes"].toLowerCase()}.png`
                );
                ctx.drawImage(eyes, 235, 250, 250, 250);
                const mouth = await loadImage(
                    `./layers/Mouth/${metadata["Mouth"].toLowerCase()}.png`
                );
                ctx.drawImage(mouth, 235, 250, 250, 250);
            }
        }   
    }
    return canvas.toBuffer("image/png");
}