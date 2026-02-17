#!/bin/bash
while true; do
  echo "Starting server..."
  npm run dev -- --host 127.0.0.1 --port 3000
  echo "Server stopped. Restarting in 2 seconds..."
  sleep 2
done
