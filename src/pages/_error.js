import Link from "next/link"
import NextError from "next/error"
import React from "react"

const Error = ({statusCode}) => <div>
  <div id="errorStatusCode">{statusCode || "unknown"}</div>
  <p>
    <Link href="/" id="errorGoHome">
      go home
    </Link>
  </p>
</div>

Error.getInitialProps = ctx => ({statusCode: {statusCode: NextError.getInitialProps(ctx)} || null})

export default Error
