

const getContacts = (req,res)=>{
    res.status(200).json({message :"Get all contacts"})
}

const createContact = (req,res)=>{
    console.log('body create', req.body);
    const {name,email,phone} = req.body

    if(!name || !email || !phone){
        res.status(400);
        throw new Error ("All fields are mandatory");
    }
    res.status(201).json({message :"Crteate contact"})
}

const getContact = (req,res)=>{
    res.status(200).json({message :`Get contact for ${req.params.id}`})
}

const updateContact = (req,res)=>{
    res.status(200).json({message :`Update for ${req.params.id}`})
}

const deleteContact = (req,res)=>{
    res.status(200).json({message :`Delete contact for ${req.params.id}`})
}

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}