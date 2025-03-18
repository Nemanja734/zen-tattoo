type Props = {
    params: Promise<{id: number}>
}

export default function Page({params,}: Props) {
    console.log(params);

    return(
        <div className="container">
            
        </div>
    )
}