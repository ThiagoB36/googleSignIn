import { Linking } from "react-native";

export async function btnGoogleSignIn() {
  console.log("BTN GOOGLE");
  try {
    const clientId =
      "707022923688-bgb00njrnul73p3r216irvmdav2u1m7u.apps.googleusercontent.com";
    const redirectUri = "https://auth.expo.io/@morfos/questCards";
    const scope = "openid%20profile%20email";

    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
    await Linking.openURL(authUrl);

    await getUserProfile(
      "ya29.a0AfB_byCGIPoNp92beI6inHiSazKwZDlDK1EBK4C_qQ7BqYVHNvIEibfgqG6wHCwCzNcnSSzMe4I04zRxCAs5kFjgQxK5Yjxuh_61SG9aPzxDgTzJfcwr5-i36LSgxDQ4CSRtZIQCXp74_jDxSPItOMqyjqlvMR_bqQaCgYKAQYSARMSFQHGX2Miqo4Y5adTF5mvGq9N4YE-Mg0169"
    );
  } catch (error) {
    console.log({ error });
  }
}

const getUserProfile = async (accessToken: string) => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.ok) {
      const userData = await response.json();
      console.log("Dados do usuário:", userData);
      return userData;
    } else {
      console.error("Erro ao obter dados do usuário:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Erro ao obter dados do usuário:", error);
    return null;
  }
};
