import os
from rembg import remove
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
        with open(in_path, 'rb') as i:
            with open(out_path, 'wb') as o:
                input_data = i.read()
                output_data = remove(input_data)
                o.write(output_data)
        print(f"Saved to {out_path}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")
