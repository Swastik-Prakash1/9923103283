import requests

# ============== FILL THESE DETAILS ==============
email = "9923103283@mail.jiit.ac.in"          # Must be your university email
name = "Swastik Prakash"
mobile_no = "8081605787"
roll_no = "9923103283"                   # e.g., "22BCS123"
github_username = "Swastik-Prakash1"       # Exactly as on GitHub
access_code = "MdprhE"     # Received in email
# ================================================

url = "http://4.224.186.213/evaluation-service/register"

payload = {
    "email": email,
    "name": name,
    "mobileNo": mobile_no,
    "rollNo": roll_no,
    "githubUsername": github_username,
    "accessCode": access_code
}

headers = {
    "Content-Type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print("Status Code:", response.status_code)

if response.status_code == 200:
    data = response.json()
    print("\n✅ Registration Successful!\n")
    print("Client ID     :", data.get("clientID"))
    print("Client Secret :", data.get("clientSecret"))
    print("\n⚠️  SAVE THESE TWO VALUES IMMEDIATELY! You won't get them again.")
else:
    print("❌ Error:")
    print(response.text)