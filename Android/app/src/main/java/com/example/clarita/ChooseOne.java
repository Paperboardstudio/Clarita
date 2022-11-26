package com.example.clarita;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;

import android.content.Intent;
import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.widget.Button;

public class ChooseOne extends AppCompatActivity {

    Button Chef, Customer, DeliveryPerson;
    Intent intent;
    String type;
    ConstraintLayout bgimage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_choose_one);

        AnimationDrawable animationDrawable = new AnimationDrawable();
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat1), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat2), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat3), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat4), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat5), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat7), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat8), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat9), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat10), 3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat11), 3000);

        animationDrawable.setOneShot(false);
        animationDrawable.setEnterFadeDuration(850);
        animationDrawable.setExitFadeDuration(1600);

        bgimage = findViewById(R.id.back3);
        bgimage.setBackgroundDrawable(animationDrawable);
        animationDrawable.start();

        intent = getIntent();
        type = intent.getStringExtra("Home").toString().trim();

        Chef = (Button) findViewById(R.id.chef);
        DeliveryPerson = (Button) findViewById(R.id.delivery);
        Customer = (Button) findViewById(R.id.customer);

        Chef.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (type.equals("Email")){
                    Intent loginemail = new Intent(ChooseOne.this, Cheflogin.class);
                    startActivity(loginemail);
                    finish();
                }
                if (type.equals("Phone")){
                    Intent loginphone = new Intent(ChooseOne.this, Chefloginphone.class);
                    startActivity(loginphone);
                    finish();
                }
                if (type.equals("Signup")){
                    Intent register = new Intent(ChooseOne.this, ChefRegistration.class);
                    startActivity(register);

                }
            }
        });

        Customer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (type.equals("Email")){
                    Intent loginemailcust = new Intent(ChooseOne.this, Login.class);
                    startActivity(loginemailcust);
                    finish();
                }
                if (type.equals("Phone")){
                    Intent loginphonecust = new Intent(ChooseOne.this, Loginphone.class);
                    startActivity(loginphonecust);
                    finish();
                }
                if (type.equals("Signup")){
                    Intent registercust = new Intent(ChooseOne.this, Registration.class);
                    startActivity(registercust);

                }
            }
        });

        DeliveryPerson.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (type.equals("Email")){
                    Intent loginemail = new Intent(ChooseOne.this, Delivery_Login.class);
                    startActivity(loginemail);
                    finish();
                }
                if (type.equals("Phone")){
                    Intent loginphone = new Intent(ChooseOne.this, Delivery_Loginphone.class);
                    startActivity(loginphone);
                    finish();
                }
                if (type.equals("Signup")){
                    Intent registerdelivery = new Intent(ChooseOne.this, Delivery_Registration.class);
                    startActivity(registerdelivery);

                }
            }
        });

    }
}