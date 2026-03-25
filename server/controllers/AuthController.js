export async function AuthFunction(req, res) {

    const { idClasse, password } = req.body || {}

    if (!idClasse || !password) {
        return res.status(400).json({ success: false, message: "class and password are required" })
    } else {

    }

    return res.status(200).json({
        success: true,
        user: { email },
        // In a real app, return a proper token/session identifier
        token: "dummy-token"
    })

}
