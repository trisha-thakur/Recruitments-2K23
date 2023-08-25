export async function login(username: string, password: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-in`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password}),
      }
    );
    return response;
}

export async function verify(token: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verify`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      }
    );
    return response;
}
  