let footer = "/src/assets/footer.png";

function Footer() { // フッター
    return (
        <div>
            <img src={footer} className="hover:opacity-90" alt={`画像`} />
        </div>
    )
}

export default Footer;