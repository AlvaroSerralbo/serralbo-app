import { useState, useEffect } from "react";

import { Carousel } from "./components/carousel";
import { Dropdown } from "./components/dropdown";
import { Table } from "./components/table";
import { getLotteries } from "./helpers/getLotteries";
import { getLotteriesDates } from "./helpers/getLotteriesDates";
import { getLotteryTable } from "./helpers/getLotteryTable";

function App() {

	const [ selected, setSelected ] = useState("Choose one");
	
    const [ lotteries, setLotteries ] = useState([]);
	
    const [ isLoading, setIsLoading ] = useState(true);
	
	const [ activeLottery, setActiveLottery ] = useState(null);
	
	const [ lotteryDays, setLotteryDays ] = useState(null);
	
	const [ lotteryTable, setLotteryTable ] = useState();

    useEffect(() => {
        const fetchLotteries = async () => {
            const data = await getLotteries();
            setLotteries(data);
            setIsLoading(false)
        }
        fetchLotteries();
    }, [])

	useEffect(() => {
		if(activeLottery){
			const fetchLotteriesDates = async() => {
				const data = await getLotteriesDates(activeLottery);
				setLotteryDays(data);
				setSelected("Choose one")
			}
			fetchLotteriesDates();
		}
	}, [activeLottery])

	useEffect(() => {

		if( selected !== "Choose one" ){
			const fetchLotteryTable = async() => {
				const data = await getLotteryTable( activeLottery, selected );
				setLotteryTable(data);
			}
			fetchLotteryTable();
		}


	}, [selected, activeLottery])

	return (
		<div className="container">
			<Carousel 
				lotteries={ lotteries } 
				isLoading={ isLoading }
				slideClick={ setActiveLottery }
			/>
			{
				lotteryDays &&
				<>
					<Dropdown 
						lotteryDays={ lotteryDays } 
						selected={selected} 
						setSelected={setSelected}
					/>
					<Table 
						lotteryTable={ lotteryTable }
					/>
				</>
			}
		</div>
	);
}

export default App;
