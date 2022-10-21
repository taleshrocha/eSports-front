interface gameBannerProps {
    bannerUrl: string;
    title: string;
    adNum: number;
}

export function GameBanner(props: gameBannerProps) {
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
            <img src={props.bannerUrl} alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block sm:text-sm">{props.title}</strong>
                <span className="text-zinc-300 text-sm block">{props.adNum} anúncio{(props.adNum < 2) ? "" : "s"}</span>
            </div>
        </a>
    )
}
