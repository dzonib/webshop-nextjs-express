export default function Test() {
  return (
    <div className="testyoyo">
      <h1>Test yo</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Kingkong</li>
      </ul>

      <style jsx global>
        {`
          .testyoyo {
            position: relative;
            margin: 30px;
          }

          h1::before {
            content: "";
            width: 2px;
            background: red;
            height: 100%;
            left: 0;
            position: absolute;
            transform: skew(-20deg);
            top: 0;
            bottom: 0
          }
       
        `}
      </style>
    </div>
  )
}