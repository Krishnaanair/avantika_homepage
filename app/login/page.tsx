import LoginForm from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90">
        <source
          src="https://v1.pinimg.com/videos/iht/720p/f3/c1/78/f3c178f83d970c589386152b26645e95.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative flex-1 flex items-center justify-center p-6">
        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg  max-w-md w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

