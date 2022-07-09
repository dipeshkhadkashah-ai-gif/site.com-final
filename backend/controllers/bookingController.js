const Booking=require('../models/bookingModel')
// Creating Bookings
const createBooking=async(req,res)=>{
   
   const bookings=new Booking({
    // user:req.user._id,
    email:req.body.email,
    name:req.body.name,
    contact:req.body.contact,
    session:req.body.session,
    type:req.body.type,
    equipments:req.body.equipments,
    from:req.body.from,
    to:req.body.to,
    address:req.body.address
   })
   try{
    const saveBooking=await bookings.save();
    res.json(saveBooking)

   }catch(error){
    res.json({message:error.message})

   }
}

// GET BOOKINGS
const getBookings= async(re,res)=>{
    const bookings=await Booking.find({})
    res.json(bookings)
}

// Get BOOKINGS BY ID
const getBookingById=async(req,res)=>{
    const booking=await Booking.findById(req.params.id);
    if(booking){
        res.json(booking)
    }else{
        res.json({message:"Blog not found"})
    }
}
// Update BOOKING
const updateBooking=async(req,res)=>{
    try{
    let booking=await Booking.findById(req.params.id)
    if(!booking){
        res.json('Bookings not found')
    }
    booking =await Booking.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useFindAndModify:false,
        runValidators:true
    })
res.status(200).json(booking)
    }catch(error){
        console.log(error)
        res.send(error)
    }

}
// Delete BOOKING
const deleteBooking=async(req,res)=>{
    const booking=await Booking.findById(req.params.id)
    if(!booking){
        res.json("Booking not found")
    }
    await booking.remove()
    res.json({
        message:"Booking Deleted"
    })
    
}

module.exports={createBooking,getBookingById,getBookings,deleteBooking,updateBooking}; 