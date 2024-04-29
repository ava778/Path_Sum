# 81-Path Sum: Two Ways

# Question

In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by **only moving to the right and down**,Find the minimal path sum from the top left to the bottom right by only moving right and down in [matrix.txt](https://projecteuler.net/resources/documents/0081_matrix.txt) (right click and "Save Link/Target As..."), a 31K text file containing an 80 by 80 matrix.

## Solution

### Language: Javascript
### Environment Requirement: Node.js
### Project Structure: 
			main.js -- read matrix, calculate the minimal path sum and then print out.
			matrix.txt -- downloaded file
### Concept: 
1. **Read the Matrix from the downlaoded file**: Use Node.js's filesystem module to read the `matrix.txt` file
2. **Calculate the Minimal Path Sum**: Starting from the bottom-right corner of the matrix, the script calculates the minimal path sum backwards to the top-left. It iteratively updates each cell based on the possible paths from the cell (right and down). The aim is to find the minimal cost path at each step, culminating in the minimal path sum at the matrix's starting point.

## Run
		node main.js