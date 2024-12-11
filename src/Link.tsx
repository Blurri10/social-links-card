interface LinkProps {
    url: string;
    text: string;
}

const Link = ({ url, text }: LinkProps) => {
    const openLink = (link: string) => window.open(link, '_blank');

    return (
        <div className="link" onClick={() => openLink(url)}>{text}</div>
    )
}

export default Link;