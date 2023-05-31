import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <sppan className="featuredTitle">Revenue</sppan>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3,145</span>
                <span className="featuredMoneyRate negative">-11.4<ArrowDownward className="featuredIcon negative" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <sppan className="featuredTitle">Sales</sppan>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,235</span>
                <span className="featuredMoneyRate negative">-1.4<ArrowDownward className="featuredIcon negative" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <sppan className="featuredTitle">Cost</sppan>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,145</span>
                <span className="featuredMoneyRate">+2.7<ArrowUpward className="featuredIcon" /></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
