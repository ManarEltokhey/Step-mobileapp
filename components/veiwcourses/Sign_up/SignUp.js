import React, { useState } from "react";
import { Formik, Field, useFormik, TextField, FastField } from "formik";
import * as Yup from "yup";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Button } from "react-native";
import { Card, CardContent, FilledInput } from "@react-native-material/core";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { CardBase } from "@rneui/base/dist/Card/Card";
import SelectDropdown from "react-native-select-dropdown";
import RNPickerSelect from "react-native-picker-select";
import { CheckBox } from "react-native-web";
function Page1() {
  const year = ["0-1", "2-5", "5-10", "10-20"];
  const Graduation = ["2000", "2005", "2010", "2022"];
  const radio_props = [
    {label: 'trainer', value: 0 },
    {label: 'trainee', value: 1 }
  ];
 
  return (
    <CardBase >
      <Formik
        initialValues={{
          userName: "",
          password: "",
          email: "",
          NID: "",
          administration: "",
          school: "",
          yearsNo: "",
          specialization: "",
          Graduation: "",
          phone: "",
          user: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .min(10, "Must be contain at least second name")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          NID: Yup.string()
            .min(14, "Must be 14 characters not more or less")
            .required("Required"),
          administration: Yup.string().required("Required"),
          school: Yup.string().required("Required"),
          yearsNo: Yup.string().required("Required"),
          specialization: Yup.string().required("Required"),
          Graduation: Yup.string().required("Required"),
          phone: Yup.string().required("Required"),
          user: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
          <Text style={{fontSize:"30px" ,fontWeight:"bold",alignItems:"center", color:"#2B3467"}}>REGISTER</Text>
            <FormSteps onSubmit={props.handleSubmit}>
              <View>
                <Text>User Name</Text>
                <TextInput
                style={styles.inputStyle}
                  onChangeText={props.handleChange("userName")}
                  name="userName"
                  id="userName"
                  placeholder="Enter your full name"
                />
                {props.touched.userName && props.errors.userName ? (
                  <Text>{props.errors.userName}</Text>
                ) : null}
                <Text>Email</Text>
                <TextInput
                style={styles.inputStyle}
                  onChangeText={props.handleChange("email")}
                  name="email"
                  id="email"
                  onBlur={props.handleBlur("email")}
                  value={props.values.email}
                  placeholder="Enter your mail"
                />
                {props.touched.email && props.errors.email ? (
                  <Text>{props.errors.email}</Text>
                ) : null}
                <Text>Password</Text>
                <TextInput
                style={styles.inputStyle}
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  name="password"
                  id="password"
                  value={props.values.password}
                  placeholder="Enter password"
                />
                {props.touched.password && props.errors.password ? (
                  <Text>{props.errors.password}</Text>
                ) : null}
                <Text>National ID</Text>
                <TextInput
                style={styles.inputStyle}
                  onChangeText={props.handleChange("NID")}
                  name="NID"
                  id="NID"
                  value={props.values.NID}
                  placeholder="Enter Personal ID"
                />
                {props.touched.NID && props.errors.NID ? (
                  <Text>{props.errors.NID}</Text>
                ) : null}
              </View>
              <View>
                <Text>Administration</Text>
                <TextInput
                style={styles.inputStyle}
                  onChangeText={props.handleChange("administration")}
                  name="administration"
                  id="administration"
                  value={props.values.administration}
                  placeholder="Enter your administration"
                />
                {props.touched.administration && props.errors.administration ? (
                  <Text>{props.errors.administration}</Text>
                ) : null}
                <Text>School</Text>
                <TextInput
                   style={styles.inputStyle}
                  onChangeText={props.handleChange("school")}
                  name="school"
                  id="school"
                  value={props.values.school}
                  placeholder="Enter your school"
                />
                {props.touched.school && props.errors.school ? (
                  <Text>{props.errors.school}</Text>
                ) : null}
                <Text>YearsNo</Text>
                <SelectDropdown
                  data={year}
                  onSelect={(selectedItem, index) => {
                    //console.log(selectedItem, index)
                    return selectedItem;
                  }}
                />
              </View>
              <View>
                <Text>Specialization</Text>
                <TextInput
                style={styles.inputStyle}
                  onChangeText={props.handleChange("specialization")}
                  name="specialization"
                  id="specialization"
                  value={props.values.specialization}
                  placeholder="Enter your  specialization"
                />
                {props.touched.specialization && props.errors.specialization ? (
                  <Text>{props.errors.specialization}</Text>
                ) : null}
                <Text>Graduation Year</Text>
                <SelectDropdown
                  data={Graduation}
                  onSelect={(selectedItem, index) => {
                    //console.log(selectedItem, index)
                    return selectedItem;
                  }}
                />
                <Text>Phone</Text>
                <TextInput
                style={styles.inputStyle}
                  onChangeText={props.handleChange("phone")}
                  name="phone"
                  id="phone"
                  value={props.values.phone}
                  placeholder="Enter your phone number"
                />
                {props.touched.phone && props.errors.phone ? (
                  <Text>{props.errors.phone}</Text>
                ) : null}

<View>
  <Text>Choose</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {value}}
           
        />
      </View>
                
              </View>
            </FormSteps>
          </View>
        )}
      </Formik>
    </CardBase>
  );
}
const FormSteps = (props) => {
  const childrenArr = React.Children.toArray(props.children);
  const [step, setStep] = useState(1);
  const goBack = () => {
    setStep(step - 1);
  };
  const goNext = () => {
    setStep(step + 1);
  };
  return (
    <>
      {childrenArr[step - 1]}
      <View style={styles.bodyBtn}>
      {step > 1 &&<View style={{width:"50%",justifyContent:"space-around",margin:5}}><Button title="Back"   onPress={goBack}></Button></View> }
      {step < 3 && step >= 1 && <View style={{width:"50%",justifyContent:"space-around" ,margin:5}}><Button title="Next"style={styles.bodyBtn}  onPress={goNext}>next</Button></View>}
      
      </View>
      {step==3&&
      <Button title="submit" color={"#13005A"} onPress={props.handleSubmit}>
        Submit
      </Button>
       }
    </>
  );
};
const styles=StyleSheet.create({
  bodyBtn:{
    flex:1,
    justifyContent:"center",
    flexDirection:"row",
    width:"40%",
   

  },
  inputStyle:{
     backgroundColor:"#b3d1ff", padding:10,margin:5, color:"black",
     
  }
})
export default Page1;
