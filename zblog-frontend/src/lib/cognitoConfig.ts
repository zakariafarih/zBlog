export const cognitoConfig = {
  authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY!,
  client_id: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
  redirect_uri: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI!,
  response_type: "code",
  scope: "phone openid email",
}
