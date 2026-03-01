import os
from PIL import Image

image_dir = "public/images"
# Try for the listed images
for filename in ["python.jpg", "Java-Logo.png", "html.png", "css.png", "js.png", "dsa.png"]:
    in_path = os.path.join(image_dir, filename)
    name, ext = os.path.splitext(filename)
    out_path = os.path.join(image_dir, name + "_trans.png")
    
    if not os.path.exists(in_path):
        continue
    
    print(f"Removing background for {filename}...")
    try:
        img = Image.open(in_path).convert("RGBA")
        datas = img.getdata()
        
        # Get top-left pixel color as background color guess
        bg_color = datas[0]
        
        newData = []
        for item in datas:
            # If the pixel is close to the background color (usually white/grey), or very light, make it transparent
            # Let's say if it's very light grey or white: R>230, G>230, B>230
            if item[0] > 230 and item[1] > 230 and item[2] > 230:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(out_path, "PNG")
        print(f"Saved to {out_path}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")
