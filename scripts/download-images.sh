#!/bin/bash

# Create the agents directory if it doesn't exist
mkdir -p public/agents

# Array of image names
images=(
  "data-analyst"
  "content-writer"
  "customer-service"
  "research"
  "devops"
  "marketing"
)

# Download each image
for image in "${images[@]}"
do
  curl "https://placehold.co/400x300/1a1a1a/ffffff/png?text=${image}" > "public/agents/${image}.png"
done 