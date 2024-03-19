import { Container } from "./styles";
import Bnb from '../../assets/bnb-lg-cg.png';
import { useEffect, useState } from "react";
import Lead from '../../assets/coroa.png';
import { donate, getLeaderBoard } from "../../service/Web3Service";
import { ethers } from "ethers";

function Modal() {
    const [value, setValue] = useState("");
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState<string[]>([]);
    const [amount, setAmount] = useState<number[]>([]);
    const [position, setPosition] = useState(1)

    function changeValue(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    async function handleDonate() {
        try {
            donate(value).then().catch(e => e)
        } catch (error) {
            console.error(error);
        }
    }

    function handleChangePage(n: number) {
        setPage(n);
    }

    useEffect(() => {
        async function defaultView() {
            try {
                const { addresses, amounts } = await getLeaderBoard();
                const limitedAddresses = addresses.slice(0, 100);
                 const limitedAmount = amounts.slice(0, 100).map((item: any) => {
                    if(typeof item === 'string'){
                        return parseFloat(item.replace(',',''));
                    }
                    else{
                        return item;
                    }
                 });
                 setAmount(limitedAmount);

                const parsedAddresses = limitedAddresses.map((item: any) => {
                    try {
                        return JSON.parse(item);
                    } catch (error){
                        console.error("Error parsing address:", error);
                        return item; 
                    }
                });
                setUsers(parsedAddresses);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        }
        defaultView();
    }, []);

    return (
        <Container>
            {
                page === 1 ?
                    (
                        <div>
                            <div id="div-one">
                                <p id="paragraph">Make a donation to the project</p>
                            </div>
                            <div id="box-two">
                                <div id="div-trhee">
                                    <img id="new-bnb" src={Bnb} alt="logo" />
                                    <input onChange={changeValue} id="BNB" placeholder="0 BNB" type="number" value={value} />
                                </div>
                                <button onClick={handleDonate}>Send BNB <img id="bnb" src={Bnb} alt="bnb" /></button>
                            </div>
                        </div>
                    )
                    :
                    ""
            }

            {
                page === 2 ?
                    (
                        <div id="leader">
                            <div>
                                <div id="users-box">
                                    <img id="top" src={Lead} alt="top"/>
                                    <p className="p-lead">Addresses</p>
                                    {users.map((user, index) => (
                                        <p key={index}>{index + 1} - {user}</p>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className="p-lead">Values</p>
                                    {amount.map((value, index) => (
                                        <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                                            <p id="amount">{ethers.formatEther(value.toString())}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                    :
                    ""
            }
            <div id="radios">
                <button className="btn-class" onClick={() => handleChangePage(1)}>Next</button>
                <button className="btn-class" onClick={() => handleChangePage(2)}>Back</button>
            </div>
        </Container>
    );
}

export default Modal;
