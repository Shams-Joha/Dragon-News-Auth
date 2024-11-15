import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { Link } from "react-router-dom";
// {
//     "_id": "e342b6c0c8efc8ca9e811991dc8a7900",
//     "others_info": {
//         "is_todays_pick": true,
//         "is_trending": false
//     },
//     "category_id": "04",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 733,
//     "title": "Shaquille O’Neal auctions a 1000 size 22 Reeboks for $999.32 each!",
//     "author": {
//         "name": "Theo Minh Châu",
//         "published_date": "2022-08-25 06:03:00",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/j86wjDW/unsplash-Eh-Tc-C9s-YXsw-20.png",
//     "image_url": "https://i.ibb.co/WNrB5d7/unsplash-Eh-Tc-C9s-YXsw-9.png",
//     "details": "1,000 pairs of autographed Size 22 Reeboks were made available thanks to a partnership between Shaquille O’Neal and Steiner Sports. Shaquille O’Neal is a larger-than-life character in every way. We’re talking about a superstar who earned as many self-styled nicknames as he did awards, a man who made his NBA debut by traveling from coast to coast like a speeding freight train. Naturally, O’Neal was also physically larger than most people due to his 7ft height and 300-pound weight. His absurd size 22 shoes could serve as an oversized phone for Allen Iverson. .@SHAQ‘s signature is going global. The 4x @NBA champ is bringing his SHAQ shoes to South Africa — priced between R799 & R999 ($52 – $65 USD) for children and adults. Shaq says the current line is aimed at “everyday consumers.” pic.twitter.com/MWEHdVZOX0 — Boardroom (@boardroom) January 16, 2022 O’Neal is a well-known figure outside of basketball, where he found tremendous success. The former NBA player is now much more than that because he is well-known all over the country. Shaq gained a lot of admirers by choosing to work with Wall-Mart to launch an affordable footwear line. This helped in solidifying his legacy beyond his playing career. Budget-friendly children’s shoes from O’Neal and the supermarket chain have been well received. Also, read – Anthony Davis and Patrick Beverley – A combination that will potentially make the Los Angeles Lakers a top-ranking defensive side again Shaquille O’Neal agreed to release a thousand autographed size-22 Shaq Attaq shoes for a premium! Shaq was the latest to cash in on the growing wave of collectors, as sports memorabilia for the biggest basketball stars of the 1990s continues to rise in demand. O’Neal has collaborated with Steiner Sports to release 1,000 unique pairs of his first-ever Reebok signature shoe. The Shaq Attaq; each shoe has a unique signature, numbered 32 or 34, with various call-outs to the Diesel’s career achievements such as “HOF 16” and much more. Each pair costs $999.32 and comes in a special glass case with personalized inscriptions. Shoe In: @shaq & @steinersports team up to offer 1,000 size 22 signed rookie shoes for $999.32 each pic.twitter.com/ypm5PFrEk7 — Darren Rovell (@darrenrovell) August 4, 2016 O’Neal collaborated with Steiner Sports, according to ESPN’s Darren Rovell, to provide fans with a pair of his signature shoes. 1,000 pairs of his first signature shoe—the Reebok Shaq Attaq—from his first season with the Orlando Magic were released. The limited edition shoes will cost a staggering $999.32 and come in Shaq’s size 22 feet. The CEO of Steiner Sports, Brandon Steiner, also said that this is just the beginning. The company will continue to produce other O’Neal memorabilia. These include shoes and jerseys that he wore for all of the NBA teams Shaq represented. Also, read – Michael Jordan, who owns a $15 million golf course, once openly mocked President Clinton in a game The post Shaquille O’Neal auctions a 1000 size 22 Reeboks for $999.32 each! appeared first on The SportsRush."
// }

const NewsDetails = () => {

    const { data } = useLoaderData();
    const news = data[0];
    console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    {/* News Details Card */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-5 pt-5">
                            <img
                                src={news.image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="p-10 items-center text-center space-y-5">
                            <h2 className="card-title">{news.title}</h2>
                            <p className="text-left">{news.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">All News In this Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;