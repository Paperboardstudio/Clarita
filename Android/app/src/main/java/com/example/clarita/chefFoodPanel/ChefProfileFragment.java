package com.example.clarita.chefFoodPanel;

import android.content.Intent;
import android.graphics.drawable.AnimationDrawable;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.fragment.app.Fragment;

import com.example.clarita.R;

public class ChefProfileFragment extends Fragment{

    Button postDish;
    ConstraintLayout backimg;


    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View v = inflater.inflate(R.layout.fragment_chef_profile,null);
        getActivity().setTitle("Post Dish");

        AnimationDrawable animationDrawable = new AnimationDrawable();
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat2),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat3),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat4),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat5),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.catmmmmm),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat7),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat8),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat9),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat10),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.cat11),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.bog),3000);
        animationDrawable.addFrame(getResources().getDrawable(R.drawable.blushcat),3000);

        animationDrawable.setOneShot(false);
        animationDrawable.setEnterFadeDuration(850);
        animationDrawable.setExitFadeDuration(1600);

        backimg = v.findViewById(R.id.back1);
        backimg.setBackgroundDrawable(animationDrawable);
        animationDrawable.start();

        postDish =  (Button)v.findViewById(R.id.post_dish);

        postDish.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(getContext(),chef_postDish.class));
            }
        });

        return v;
    }
}