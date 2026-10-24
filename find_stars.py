import cv2
import numpy as np

img = cv2.imread('public/uk-map-custom.jpg')
h, w = img.shape[:2]

# The stars are a distinct blue color. Convert to HSV.
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Define blue color range for the stars
lower_blue = np.array([100, 150, 150])
upper_blue = np.array([130, 255, 255])

mask = cv2.inRange(hsv, lower_blue, upper_blue)

# Find contours
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

stars = []
for cnt in contours:
    # Get center
    M = cv2.moments(cnt)
    if M["m00"] > 0:
        cx = int(M["m10"] / M["m00"])
        cy = int(M["m01"] / M["m00"])
        
        # Filter out tiny noise
        if cv2.contourArea(cnt) > 10:
            stars.append((cx, cy))

# Output as percentages
print(f"Found {len(stars)} stars")
out = "const PINS = [\n"
for i, (cx, cy) in enumerate(stars):
    px = (cx / w) * 100
    py = (cy / h) * 100
    delay = (i % 20) * 0.1
    out += f"  {{ id: {i}, top: '{py:.2f}%', left: '{px:.2f}%', delay: '{delay:.2f}s', isMajor: false }},\n"
out += "];"
print(out)
