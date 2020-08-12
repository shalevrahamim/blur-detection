import cv2
import sys;

def variance_of_laplacian(image):
	return cv2.Laplacian(image, cv2.CV_64F).var();

image = cv2.imread(sys.argv[1]);
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
fm = variance_of_laplacian(gray);

if fm < 100:
    print("BLUR");
else:
    print("NOT BLUR")