import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const vedioSchema = new Schema(
  {
    vedioFile:{
        type:String,
        required:string,

    },
    thumbnell:{
        type:String,
        required:string, 
    },
    title:{
        type:String,
        required:string,
    },
    description:{
        type:String,
        required:string,
    },
    duration:{
        type:Number,
        required:string,
    },
    views:{
        type:Number,
        // required:string,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

  },
  {
    timestamps: true,
  }
);

export const vedio = mongoose.model("Vedio", vedioSchema);
