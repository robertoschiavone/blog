import Container from "../Container"

const Footer = () =>
    <footer className="border-t border-foreground">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl font-bold tracking-tighter leading-tight text-center">
            &copy; {new Date().getFullYear()} Roberto Schiavone
          </h3>
        </div>
      </Container>
    </footer>

export default Footer
