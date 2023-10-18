import swal from "sweetalert";

const DonarCard = ({Detail}) => {
    const {

       
        text_button_bg,
        
        } = Detail;
        
       
        const title_bg = {
            backgroundColor:text_button_bg,
        };


    const {id,picture,title,category,description,category_bg,card_bg,price} = Detail || {};
    const handleAddToDonation = () =>{
        const AddDonatedItemsArray = [];
        const DonatedItems = JSON.parse(localStorage.getItem("Donations"))
        

        if(!DonatedItems){

            AddDonatedItemsArray.push(Detail);
            localStorage.setItem("Donations", JSON.stringify(AddDonatedItemsArray));
            swal("Good job!", "Donated Succcessfully", "success");
            
        }
        else{
            const isExist = DonatedItems.find(Detail => Detail.id == id)

            if(!isExist){
                AddDonatedItemsArray.push(...DonatedItems,Detail);
                localStorage.setItem("Donations", JSON.stringify(AddDonatedItemsArray));
                swal("Good job!", "Donated Succcessfully", "success");
            }
           else{
            swal("Error!", "Already Donated", "error");
           }
            
        }
       // console.log(DonatedItems)
       // console.log(Detail);

        //localStorage.setItem('test',JSON.stringify([{name:"hasib"},{ph:"jabed"}]))

       
            
    }
    
   
    
    return (
        <div>
            <div className="relative flex  flex-col rounded-xl  bg-clip-border text-gray-700 ">
        
                
                <img className="w-full h-[550px]" src={picture} alt="" />
                
                <div className='backdrop-brightness-50 rounded-lg absolute w-full my-[461px]'>
                    <button style={title_bg} onClick={handleAddToDonation} className='btn bg-red-500 hover:bg-violet-600 border-none text-white my-5 ml-10'>Donate {price}</button>
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">

                </div>
            </div>
        </div>
    );
};

export default DonarCard;