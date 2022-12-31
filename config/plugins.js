module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: "strapi-provider-upload-imagekit",  // Community providers need to have the full package name
            providerOptions: {
                publicKey: "public_HARGWdaGe5KEVwGXXsgU5e9Ugvs=",
                privateKey: "private_OWowSkmfiMrbKqXRS/FFWhxGc28=",
                urlEndpoint: "https://ik.imagekit.io/4uas0giyg",  // Example: https://ik.imagekit.io/username

                // Optional
                params: {
                    folder: "/production/images"  // Defaults to "/" if value is not supplied
                }
            }
        }
    }
});