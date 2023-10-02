import { generateNoBg } from "./generate_no_background.js";
import { generatePhoneWallpaperLogo } from "./generate_phone_wallpaper_logo.js";
import { generatePhoneWallpaperNoLogo } from "./generate_phone_wallpaper_no_logo.js";
import { generateBannerX } from "./generate_x_banner.js";
import { generateBannerNoLogoX } from "./generate_x_banner_no_logo.js";
import { getBanxMetadata } from "./hyperspace.js";
import { generateZombie } from "./generate_zombie_banx.js";

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
    buffer = await generateNoBg(metadata)
  }

  // Generate wallpaper
  if (imageType === "phone_wallpaper_logo") {
    buffer = await generatePhoneWallpaperLogo(metadata, color)
  }

  if (imageType === "phone_wallpaper_no_logo") {
    buffer = await generatePhoneWallpaperNoLogo(metadata, color)
  }

  // Generate twitter/ X banner
  if (imageType === "x_banner_logo") {
    buffer = await generateBannerX(metadata, color)
  }

  // Generate twitter/ X banner
  if (imageType === "x_banner_no_logo") {
    buffer = await generateBannerNoLogoX(metadata, color)
  }

  // Generate zombie
  if (imageType === "kill_banx") {
    buffer = await generateZombie(metadata)
  }

  return buffer;
}

