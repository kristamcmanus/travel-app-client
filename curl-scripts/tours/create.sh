API="http://localhost:4741"
URL_PATH="/tours"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "tour": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
