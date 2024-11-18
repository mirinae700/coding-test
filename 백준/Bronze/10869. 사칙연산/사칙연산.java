import java.util.Scanner;

public class Main{
    public static void main(String args[]){
        int a = 0, b = 0;
        Scanner scan = new Scanner(System.in);

        while (!(validate(a) && validate(b))) {
            try {
                a = scan.nextInt();
                b = scan.nextInt();
            } catch (Exception e) {

            }
        }

        System.out.println(a + b);
        System.out.println(a - b);
        System.out.println(a * b);
        System.out.println(a / b);
        System.out.println(a % b);
    }

    public static boolean validate(int number) {
        return number >= 1 && number <= 10000;
    }
}