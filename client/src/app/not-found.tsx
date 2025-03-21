import Heading from "@/shared/ui/heading";

export default function NotFound() {
    return(
        <div className="container">
            <Heading level="title-primary">404 Not Found</Heading>
            <Heading level="heading-primary">This page does not exist.</Heading>
        </div>
    )
}