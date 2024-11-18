import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        double a = 0.0, b = 0.0;
        Scanner scan = new Scanner(System.in);

        while (!(validate(a) && validate(b))) {
            try {
                a = scan.nextInt();
                b = scan.nextInt();
            } catch (Exception e) {

            }
        }

        System.out.println(a / b);
    }

    public static boolean validate(double number) {
        return number > 0 && number < 10;
    }
}