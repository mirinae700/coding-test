import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        int score = -1;
        while (!validate(score)) {
            try {
                score = scan.nextInt();
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
        }
        System.out.println(getGrade(score));
    }

    public static boolean validate(int number) {
        return number >= 0 && number <= 100;
    }

    public static String getGrade(int score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }
}